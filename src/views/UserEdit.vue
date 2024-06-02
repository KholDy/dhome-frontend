<script>
</script>

<template>
    <div class="container-fluid h-100">
        <div class="row justify-content-center align-items-center h-100">
            <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">

                <form th:action="@{/admin/user-edit/save}" th:object="${user}" method="post" >
                    <input type="hidden" th:field="*{id}" />
                    <div class="m-3">
                        <h3 class="fw-normal pb-2">User edit:</h3>
                        <div class="form-group row">
                            <label class="col-4 col-form-label">E-mail: </label>
                            <div class="col-8 mb-2">
                                <input type="email" th:field="*{email}" class="form-control" required />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-4 col-form-label">Username: </label>
                            <div class="col-8 mb-2">
                                <input type="text" th:field="*{username}" class="form-control" equired minlength="2" maxlength="20" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-4 col-form-label">Password: </label>
                            <div class="col-8 mb-2">
                                <input type="password" th:field="*{password}" class="form-control" required minlength="6" maxlength="10"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-4 col-form-label">Full Name: </label>
                            <div class="col-8 mb-2">
                                <input type="text" th:field="*{fullname}" class="form-control" required minlength="2" maxlength="20"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-4 col-form-label">Country: </label>
                            <div class="col-8 mb-2">
                                <input type="text" th:field="*{Country}" class="form-control" required minlength="2" maxlength="20" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-4 col-form-label">City: </label>
                            <div class="col-8 mb-2">
                                <input type="text" th:field="*{City}" class="form-control" required minlength="2" maxlength="20" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-4 col-form-label">Phone number: </label>
                            <div class="col-8 mb-2">
                                <input type="text" th:field="*{phoneNumber}" class="form-control" required minlength="2" maxlength="20" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-4 col-form-label">Roles: </label>
                            <div class="col-8 mb-2">
                                <th:block th:each="role: ${listRoles}">
                                    <input type="checkbox" th:field="*{roles}"
                                           th:text="${role.name}" th:value="${role.id}" class="m-2" />
                                </th:block>
                            </div>
                        </div>

                        <div class="mb-2 text-end">
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>