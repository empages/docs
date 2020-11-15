<template>
    <section class="main-section">
        <div class="container">
            <div class="d-flex">
                <div class="d-flex m-auto">
                    <div class="text-center">
                        <div class="promo">
                            <h1 class="headline mb-3 mt-3">
                                Emeraude Framework
                            </h1>
                            <div class="subheadline">
                                The technological excellence.
                            </div>

                            <div class="cta-holder">
                                <router-link class="btn btn-large get-started-btn mr-lg-2" to="/core/introduction.html">Get Started</router-link>
                                <a class="btn btn-large btn-gray" target="_blank" href="https://github.com/Definux/Emeraude">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MainSection",
        data() {
            return {
                technologies: [
                    {
                        "name": ".NET Core",
                        "url": "https://dotnet.microsoft.com/download",
                        "image": "dotnetcore.png"
                    },
                    {
                        "name": "ASP.NET Core",
                        "url": "https://docs.microsoft.com/en-us/aspnet/core/",
                        "image": "aspnetcore.png"
                    },
                    {
                        "name": "Microsoft SQL Server",
                        "url": "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
                        "image": "sqlserver.png"
                    },
                    {
                        "name": "PostgreSQL",
                        "url": "https://www.postgresql.org/",
                        "image": "postgresql.png"
                    },
                    {
                        "name": "SQLite",
                        "url": "https://www.sqlite.org/index.html",
                        "image": "sqlite.png"
                    },
                    {
                        "name": "Vue.js",
                        "url": "https://vuejs.org/",
                        "image": "vuejs.png"
                    },
                    {
                        "name": "Node.js",
                        "url": "https://nodejs.org/",
                        "image": "nodejs.png"
                    },
                    {
                        "name": "Xamarin",
                        "url": "https://dotnet.microsoft.com/apps/xamarin",
                        "image": "xamarin.png"
                    },
                    {
                        "name": "Prism Library",
                        "url": "https://prismlibrary.com/",
                        "image": "prism.png"
                    },
                    {
                        "name": "Webpack",
                        "url": "https://webpack.js.org/",
                        "image": "webpack.png"
                    },
                    {
                        "name": "Gulp",
                        "url": "https://gulpjs.com/",
                        "image": "gulp.png"
                    },
                    {
                        "name": "Sass",
                        "url": "https://sass-lang.com/",
                        "image": "sass.png"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>