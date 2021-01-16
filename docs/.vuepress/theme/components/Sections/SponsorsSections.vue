<template>
    <div id="sponsors" class="pb-5">
        <div class="container">
            <div class="hp-header">
                <h2 class="hp-title">{{ mainTitle }}</h2>
                <h3 class="hp-subtitle">{{ subTitle }}</h3>
            </div>
            <div class="sponsors-list">
                <div class="sponsors-list-item">
                    <a :key="'sponsor-index-' + sponsorIndex"
                       class="feature-list-item"
                       :title="sponsor.name"
                       target="_blank"
                       :href="sponsor.url"
                       v-for="(sponsor, sponsorIndex) in sponsors">
                        <img :src="`/assets/images/sponsors/${sponsor.logo}`" :alt="sponsor.name"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "SponsorsSections",
                mainTitle: 'Sponsors',
                subTitle: 'they help us so that we can help you',
                sponsors: [
                    {
                        name: "JetBrains",
                        url: "https://www.jetbrains.com/?from=Emeraude",
                        logo: "jetbrains.svg"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    #sponsors {
        .sponsors-list {
            text-align: center;
            .sponsors-list-item {

            }
        }
    }
</style>