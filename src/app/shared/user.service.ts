import {Injectable} from "@angular/core";
import {Http, Response,Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {IUser} from "./user.modal";

const GET_URL="https://jsonserver-blog.herokuapp.com/users/";
const BLOG_URL="https://jsonserver-blog.herokuapp.com/blogs/";
const header = {headers: new Headers({'Content-Type': 'application/json'})};
@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  updateFavourite(id,data){

    return this.http.put(`https://jsonserver-blog.herokuapp.com/blogs/${data.id}`,data,header).map(this.extractData)
      .catch(this.handleError);

  }
  deleteBlog(id){
    return this.http.delete(`https://jsonserver-blog.herokuapp.com/blogs/${id}`).map(this.extractData)
      .catch(this.handleError);
  }
  getUser(): Observable<any> {
    return this.http
      .get(GET_URL)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getBlogs():Observable<any>{
    return this.http
      .get(BLOG_URL)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getOneBlog(id):Observable<any>{
    return this.http
      .get(`https://jsonserver-blog.herokuapp.com/blogs/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }
  postBlog(blog:any):Observable<any>{
    return this.http.post(BLOG_URL,blog,header).map(res => res.json());
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    console.log('error occured bro'+errMsg)
    return Observable.throw(errMsg);
  }
}
