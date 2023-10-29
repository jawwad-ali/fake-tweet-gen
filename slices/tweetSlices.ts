import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Social-Prank",
    twitterhandler: "social-prank",
    message: "",
    timeAndDate: "",
    imgUrl: "",
    retweets: "45k",
    likes: "45k",
    preview:"w-10/12"
}

export const tweetSlices = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        updateUsername: (state, action) => {
            state.username = action.payload
        },
        updateTwitterHandle: (state, action) => {
            state.twitterhandler = action.payload
        },
        updateMessage: (state, action) => {
            state.message = action.payload
        },
        updateTimeAndDate: (state, action) => {
            state.timeAndDate = action.payload
        },
        updateImage: (state, action) => {
            state.imgUrl = action.payload
        },
        updateRetweets: (state, action) => {
            state.retweets = action.payload
        },
        updateLikes: (state, action) => {
            state.likes = action.payload
        },
        updatePreview:(state , action) => {
            state.preview = action.payload
        }
    },
})

export const { updateUsername, updateTwitterHandle, updateMessage, updateTimeAndDate, updateImage, updateLikes,updatePreview, updateRetweets } = tweetSlices.actions
export default tweetSlices.reducer;