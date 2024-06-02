<script>
</script>

<template>
    <div class="container-fluid h-100">
        <div class="row justify-content-center align-items-center h-100">
            <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <form method="POST" th:action="@{/}" id="loginForm">
                    <div class="m-3">
                        <h3 class="fw-normal pb-2">Sign in:</h3>
                        <div class="form-group row">
                            <label class="col-4 col-form-label">Username:</label>
                            <div class="col-8 mb-2">
                                <input type="text" name="username" id="username" class="form-control" required minlength="2" maxlength="20"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-4 col-form-label">Password:</label>
                            <div class="col-8 mb-2">
                                <input type="password" name="password" id="password" class="form-control" required minlength="2" maxlength="20"/>
                            </div>
                        </div>

                        <div class="mb-2 text-end">
                            <button type="submit" class="btn btn-primary">Login</button>
                            <p>Don't have an account? <a  th:href="@{/register}" class="link-info">Register here</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>