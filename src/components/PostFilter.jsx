import React, {useState} from 'react';
import MySelect from "../components/UI/select/MySelect";
import MyInput from "../components/UI/input/MyInput";



const PostFilter = ({filter, setFilter}) => {
    
    return(
       <div>
           <MyInput
               value = {filter.query}
               onChange = {e => setFilter({...filter, query:e.target.value})}
               placeholder="Search..."
           />
           <MySelect
               value = {filter.sort}
               onChange = {kindOfSort => setFilter({...filter, sort:kindOfSort})}
               defaultValue = "sort by"
               options ={[
                   {value: 'title', name: 'by title'},
                   {value: 'body', name: 'by description'},
               ]}
           />
       </div>
    )
};

export default PostFilter;