function AddTodo(){

    return(
    <div className="container text-center"  style={{margin:"10px"}}>
          <div class="row">
            <div class="col">
              <input type="text" placeholder='Enter text here ' />
            </div>
            <div class="col">

              <input type="date" />
            </div>
            <div class="col" >
              <button type="button" class="btn btn-success">Success</button>
            </div>

          </div>

        </div>
        
    );
}

export default AddTodo;