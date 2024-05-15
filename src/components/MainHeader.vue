<script >
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
            </a>
            <p class="m-auto fs-4 text-white fw-medium text-center" th:text="${username}"></p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" th:href="@{/home}">Home</a>
                    </li>
                    <li class="nav-item" th:switch="${role}">
                        <a class="nav-link active" th:case="'ROLE_ADMIN'"  th:href="@{/admin}">Admin</a>
                    </li>
                    <li class="nav-item">
                        <form method="POST" th:action="@{/logout}">
                            <input class="nav-link active" type="submit" value="Logout"/>
                        </form>
                    </li>
                </ul>
            </div>
            <a class="navbar-brand" data-toggle="tooltip" data-placement="bottom" title="Change lighting settings" th:href="@{/db-rooms-and-lights.html}">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </a>
        </div>
    </nav>
</template>

<style scoped>
</style>
