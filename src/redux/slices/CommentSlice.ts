import {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[],
}

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI)=>{
    try {
        const comments = await getAll<IComment[]>('/comments');
        return thunkAPI.fulfillWithValue(comments)
    }catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue('error')
    }
});

const initCommentSlaceState:CommentSliceType = {comments:[]};
export const commentSlice = createSlice({
    name: 'userSlice',
    initialState: initCommentSlaceState,
    reducers: {},
    extraReducers:builder => builder.addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>)=>{
        state.comments = action.payload;
    }),
});

export const commentActions = {...commentSlice.actions, loadComments};