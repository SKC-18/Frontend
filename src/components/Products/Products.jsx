import React from "react";
import {Grid} from "@mui/material";
import Product from "./Product/Product";

const products=[
   
    
    { id:1,name:"Painting",describe:"running shoes",price:'$5',image:'https://picsum.photos/id/1/500/400'},
    { id:2,name:"Art",describe:"running Laptop",price:'$600',image:'https://picsum.photos/id/2/500/300'},
    { id:1,name:"Shiva Statue",describe:"running shoes",price:'$5',image:'https://picsum.photos/id/3/500/400'},
    { id:2,name:"Kohinoor",describe:"running Laptop",price:'$600',image:'https://picsum.photos/id/4/500/300'},
    { id:1,name:"Gun",describe:"running shoes",price:'$5',image:'https://picsum.photos/id/5/500/300'},
    { id:2,name:"Knife",describe:"running Laptop",price:'$600',image:'https://picsum.photos/id/6/500/300'},
    {id:1,name:"Mona Lisa",describe:"running shoes",price:'$5',image:'https://uploads0.wikiart.org/00339/images/leonardo-da-vinci/mona-lisa-c-1503-1519.jpg'},
    { id:2,name:"Dodo Bird",describe:"running Laptop",price:'$600',image:'https://cdn.britannica.com/32/88432-050-33CD0C79/Dodo.jpg'},

]

const Products=() =>{
    return(
        <main>
            <Grid container justify = "center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={13} sm={6} md={4} lg={3}>
                        <Product products={product}/> 
                    </Grid>
                )) }
            </Grid>
        </main>
    )
};
 export default Products;