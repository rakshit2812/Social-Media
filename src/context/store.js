import { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postkiList : [],
    addPost : ()=>{},
    deletePost : ()=>{},
    addInitialPost : ()=>{}
});

// const DEFAULT_POST_LIST = [
//     {
//       id: "1",
//       title: "Going to Mumbai",
//       body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//       reactions: 2,
//       userId: "user-9",
//       tags: ["vacation", "Mumbai", "Enjoying"]
//     },
//     {
//       id: "2",
//       title: "Paas ho bhai",
//       body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
//       reactions: 15,
//       userId: "user-12",
//       tags: ["Graduating", "Unbelievable"]
//     }
//   ];

export const PostListProvider = ({children}) =>{

    const PostListReducer = (currList, action) => {

        let NewPostList = currList;

        if(action.type==='DELETE_POST'){
            NewPostList = currList.filter(post => post.id!==action.payload.postID)
        }
        else if(action.type === 'ADD_POST'){
            NewPostList = [action.payload, ...currList]
        }
        else if(action.type === 'ADD_INITIAL_POST'){
            NewPostList = action.payload.posts
        }
        return NewPostList
    }

    const[postkiList , Dispatch] = useReducer(PostListReducer , [])

    const addPost = (email, userid, posttitle, postbody, reactions, hashtags)=>{
        Dispatch({
            type : 'ADD_POST',
            payload : {
                id: userid,
                title: posttitle,
                body: postbody,
                reactions: reactions,
                userId: email,
                tags: hashtags
            }
        })
    }

    const addInitialPost = (posts)=>{
        Dispatch({
            type : 'ADD_INITIAL_POST',
            payload : {
                posts,
            }
        })
    }

    const deletePost = (postID)=>{
        Dispatch({
            type : 'DELETE_POST',
            payload : {
                postID
            },
        })
    }

    return(
        
       <PostListContext.Provider value = {{ postkiList , addPost , deletePost, addInitialPost }}>{children}</PostListContext.Provider>
    )
}