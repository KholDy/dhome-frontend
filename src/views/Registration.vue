<script>
</script>

<template>
<div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100">
        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">

        <form th:action="@{/register}" method="POST" th:object="${user}">
            <div class="m-3">
                <h3 class="fw-normal pb-2">Create account: </h3>
                <div class="form-group row">
                    <label class="col-4 col-form-label">Username: </label>
                    <div class="col-8 mb-2">
                        <input type="text" class="form-control" th:field="*{username}"/>
                        <span class="validationError" th:if="${#fields.errors('username')}" th:errors="*{username}">Validation error</span>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-4 col-form-label">Password: </label>
                    <div class="col-8 mb-2">
                        <input type="password" class="form-control" th:field="*{password}"/>
                        <span class="validationError" th:if="${#fields.errors('password')}" th:errors="*{password}">Validation error</span>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-4 col-form-label">Email: </label>
                    <div class="col-8 mb-2">
                        <input class="form-control" type="email" th:field="*{email}"/>
                        <span class="validationError" th:if="${#fields.errors('password')}" th:errors="*{email}">Validation error</span>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-4 col-form-label">Fullname: </label>
                    <div class="col-8 mb-2">
                        <input class="form-control" type="text" th:field="*{fullname}"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-4 col-form-label">Country: </label>
                    <div class="col-8 mb-2">
                        <input class="form-control" type="text" th:field="*{country}"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-4 col-form-label">City: </label>
                    <div class="col-8 mb-2">
                        <input class="form-control" type="text" th:field="*{city}"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-4 col-form-label">Phone number: </label>
                    <div class="col-8 mb-2">
                        <input class="form-control" type="text" th:field="*{phoneNumber}"/>
                    </div>
                </div>
                <div class="mb-2 text-end">
                    <button type="submit" class="btn btn-primary">Registration</button>
                </div>

                <div class="validationError" th:if="${#fields.hasErrors('global')}">
                    <span th:each="err : ${#fields.errors('global')}" th:text="${err}" class="error" />
                </div>
            </div>
        </form>
    </div>
</div>
</div>
</template>