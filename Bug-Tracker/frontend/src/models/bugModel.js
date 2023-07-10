export default Bug

function bug(bug){
    if(bug != undefined){
        this._id = bug._id;
        this.name = bug.name;
        this.details = bug.details;
        this.step = bug.step;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assigned = bug.assigned;
        this.creator = bug.creator;
        this.time = bug.time;
    }
}