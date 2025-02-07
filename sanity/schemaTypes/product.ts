import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source : "title"
            }
        },
        {
            name:"description",
            type:"text",
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            title: "Price",
        },
        {
            name: "inventory",
            type: "number",
            title: "Inventory",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }
    ]
})