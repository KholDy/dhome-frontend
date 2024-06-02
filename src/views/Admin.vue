<script>
</script>

<template>
    <div class="p-2">
        <h2 class="fw-normal text-center">List of users</h2>
    </div>
    <div class="container">
        <div class="col-sm">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                    <tr class="table-primary">
                        <th scope="col">User ID</th>
                        <th scope="col">User name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Full name</th>
                        <th scope="col">Country</th>
                        <th scope="col">City</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Roles</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr th:each="user: ${listOfUsers}">
                        <td th:text="${user.id}">User ID</td>
                        <td th:text="${user.username}">User name</td>
                        <td th:text="${user.email}">E-mail</td>
                        <td th:text="${user.fullname}">Full name</td>
                        <td th:text="${user.country}">Country</td>
                        <td th:text="${user.city}">City</td>
                        <td th:text="${user.phoneNumber}">Phone number</td>
                        <td th:text="${user.getRole()}">Roles</td>
                        <td><a th:href="@{'/admin/user-edit/' + ${user.id}}">Edit</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>