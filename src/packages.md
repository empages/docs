---
sidebar: false
title: Packages
---
# Packages

<script setup>
import FrameworkPackages from ".vitepress/theme/components/FrameworkPackages.vue";
import { packages } from ".vitepress/data/packages"
</script>

Emeraude is a relatively lightweight framework that provides only the necessary features. It is separated on {{ packages.length }} 
packages which strictly follow the requirement of the application architecture. More information about each specific package is available
bellow. In every package description, there is a provided reference recommendation in order for the Inversion Flow to be properly implemented.

<FrameworkPackages :packages="packages"/>
