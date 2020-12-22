import Swal from 'sweetalert2';
import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/firebase-congif';
import { finishLoading, startLoading } from "./ui";
import { noteLoout } from './notes';

export const startLoginEmailPassword = (email,password)=>{
    return (dispatch)=>{
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
        }).catch(e=>{
            console.log(e);
            dispatch(finishLoading());
            Swal.fire('Error', e.message, 'error');
        })
    }
}

export const startRegisterWithEmailAndPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async({user})=>{
             await user.updateProfile({ displayName: name});
            dispatch(
                login(user.uid, user.displayName)
            )
        }).catch(e=>{
            console.log(e);
            Swal.fire('Error', e.message, 'error');
        })
    }

}

export const startGoogleLogin=()=>{
    return(dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user})=>{
            dispatch(
                login(user.uid, user.displayName)
            )
        });
    }
}


export const login = (uid, displayName)=>({
        type: types.login,
        payload:{
            uid,
            displayName
        }
});

export const starLogout= ()=>{
    return async(dispatch)=>{
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(noteLoout());
    }
};

export const logout = ()=>({
    type: types.logout
});
