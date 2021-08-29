import abstractView from "./abstractView.js" 

export default class extends abstractView {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }
    async getHtml(){
        return ` 
        <h1>Welcome To Dashboard<h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, doloribus!
        </p>
        <p>
            <a href="/posts" data-link>View recent articles</a>
        </p> 
        
        `;
    }
}