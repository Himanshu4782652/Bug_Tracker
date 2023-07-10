import React, { useState } from 'react'
import Viewsection from './component/bugViewSection'
import BugModel from '../../../models/bugModel'
import { useDispatch } from 'react-redux'
import { markComplete } from '../../../Controllers/redux/bugSlice'
import EditPanel from '../edit delete/editPanel'
import EditBug from '../Bug Create & edit/bugForm'
import './bugView.css'

export default (props) => {
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);

    const [displayEdit, setDisplayEdit] = useState(false);
    function editClicked() {
        setDisplayEdit(!displayEdit)
    }

    function deleteClicked() { }
    return (
        <>
            <div className='bug=view'>
                <button onclick={props.clicked} className='close-btn'>Close</button>
                <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
                <h1>{props.bug.name}</h1>
                <ViewSection title='Details' info={bug.detail} />
                <ViewSection title='Steps' info={bug.steps} />
                <ViewSection title='Priority' info={bug.priority} />
                <ViewSection title='Creator' info={bug.creator} />
                <ViewSection title='App Version' info={bug.version} />
                <ViewSection title='Time Created' info={bug.time} />
                <button onclick={() => { dispatch(markComplete()) }}>Mark Complete</button>
            </div>
            {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked} />}
        </>
    )
}