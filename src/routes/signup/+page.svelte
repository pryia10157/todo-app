<script>
    import Layout from "../signup/+layout.svelte";
</script>

<div class="container">
    <h2>Sign Up</h2>

    <form method="POST">
        <div class="row">
            <label for="email">Email</label>
            <br>
            <input type="Email" id="email" name="email" placeholder="Email">
            </div>
        <div class="row">
            <label for="username">Username</label>
            <br>
            <input type="text" id="username" name="username" placeholder="Username">
        </div>
        <div class="row">
            <label for="password">Password</label>
            <br>
            <input type="password" id="password" name="password" placeholder="Password">
        </div>
        <input type="submit" id="btn" name="submit" placeholder="Sign Up">
    </form>
</div>

<style>
    .container{
        margin: auto;
        margin-top: 50px;
        width: 50%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 50vh;
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
    #btn{
        width: 10vh;
        height: 5vh;
        margin-top: 15px;
        background-color: #34b7df;
        color:white;
        border-radius: 5px;
        outline: none;
    }
    #btn:hover{
        background-color: #2a94b4;
    }
</style>