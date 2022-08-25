import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrlApi = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = req.url;

    // replace base url
    if (!url.startsWith('http') && url.startsWith('/')) {
      const newUrl = `${baseUrlApi}${url}`;
      req = req.clone({ url: newUrl });
    }

    // add accessToken on request header
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(req);


  }
}
