import abstractView from "./abstractView.js";

export default class extends abstractView{
    constructor(){
        super();
        this.setTitle("Articles")
    }
    async getArticles(){
        return `
        <h1> Recent Articles</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, doloribus!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Libero pariatur a aut delectus impedit quod illo molestiae dolor optio unde.
        </p> 
        <p>
        <a href="/articles" data-link>View recent articles</a>
        </p> 
        `
    }
}
