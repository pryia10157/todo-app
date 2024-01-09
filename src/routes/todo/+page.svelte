<script>
    import Layout from "c:/Users/I/Desktop/Exercise/svelte-pro/todo-app/src/routes/todo/+layout.svelte";
    

</script>

<div class="container">
    <h2>Create To Do</h2>

    <form method="POST">
        <div class="row">
            <label for="todo">Enter To Do Here</label>
            <br>
            <input type="text" id="todotext" name="todo" placeholder="To Do...">
        </div>
        <div>
            <button id="saveBtn">Save</button>
        </div>
    </form>

</div>

<div id="todos"></div>


<style>
    .container{
        margin: auto;
        margin-top: 50px;
        width: 50%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 30vh;
    }
    h2{
        color: #34b7df;
        text-align: center;
        font-size: 35px;
    }
    form{
        margin-left: 50px;
    }
    label{
        color:#34b7df;
        font-size: 25px;
       
    }
    input{
        width: 75vh;
        margin-top: 3vh;
        border: none;
        border-bottom: 1px solid rgba(170, 168, 168, 0.562);
    }
    input:focus {
        outline: none;
        
    }
    #saveBtn{
        width: 10vh;
        height: 5vh;
        margin-top: 15px;
        background-color: #34b7df;
        color:white;
        border-radius: 5px;
        outline: none;
    }
    #saveBtn:hover{
        background-color: #2a94b4;
    }
</style>