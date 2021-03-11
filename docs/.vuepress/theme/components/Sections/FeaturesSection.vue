<template>
    <div id="features" class="pb-5">
        <div class="container">
            <div class="hp-header">
                <h2 class="hp-title">{{ mainTitle }}</h2>
                <h3 class="hp-subtitle">{{ subTitle }}</h3>
            </div>
            <div class="feature-list">
                <div class="feature-list-row row">
                    <div :key="'feature-index-' + featureIndex" class="feature-list-item col-sm-3"
                         v-for="(feature, featureIndex) in features">
                        <div class="d-flex">
                            <p :class="feature.icon"></p>
                            <h2 class="text-left">{{ feature.title }}</h2>
                        </div>
                        <p class="feature-description">{{ feature.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FeaturesSection",
        data() {
            return {
                features: [
                    {
                        title: "Admin Panel",
                        desc: "Ready to use and easy to customize admin panel with a bunch of features.",
                        icon: "mdi mdi-desktop-mac-dashboard"
                    },
                    {
                        title: "Clean Architecture",
                        desc: "Structure compatible with clean architecture concept with ready to use abstractions.",
                        icon: "mdi mdi-circle-slice-8"
                    },
                    {
                        title: "Vue SSR",
                        desc: "Built-in server pre-rendering engine for Vue SSR applications with SPA functionality.",
                        icon: "mdi mdi-vuejs"
                    },
                    {
                        title: "In-app Code Generation",
                        desc: "Fully customizable internal code generation for the purposes of web/mobile development.",
                        icon: "mdi mdi-state-machine"
                    },
                    {
                        title: "Encapsulated Authentication",
                        desc: "Built-in actions and views for MVC and API authentication.",
                        icon: "mdi mdi-account-key"
                    },
                    {
                        title: "Localization",
                        desc: "Provided SEO friendly localization for web and mobile projects.",
                        icon: "mdi mdi-translate"
                    },
                    {
                        title: "Logging",
                        desc: "In-app activity and error monitoring stored into separate data context.",
                        icon: "mdi mdi-chart-areaspline"
                    },
                    {
                        title: "Performance SDK",
                        desc: "Ready to use methods and abstractions to boost your web and mobile development.",
                        icon: "mdi mdi-package"
                    }
                ],
                mainTitle: 'Features',
                subTitle: 'or what you get out of the box'
            }
        }
    }
</script>

<style scoped>

</style>
