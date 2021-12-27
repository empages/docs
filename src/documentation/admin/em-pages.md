---
sidebar: true
sidebarDepth: 3
title: EmPages | Admin | Documentation
---
# EmPages

EmPage (Emeraude Page) is the core feature of the framework. Its purpose is to provide to the Emeraude users
ability to create complete feature of any kind with minimal effort. EmPage can be considered as sub feature of the 
administration part of the framework because from management point of view the framework is design to provide powerful,
private and secure solution for control of internal and external data flows.

To understand how EmPages work you need to figure it out what is the feature inspiration. First you need to understand how
application web pages (not only) are designed. Each page represents some kind of data, structured in specified way in order
to represent target context. That sentence is the key of the pages design in the framework so that's why each EmPage 
follows strict design pattern that is invented and respectively unique for the Emeraude - MSD (Model - Schema - Data).

<div class="text-center">
    <img class="w-auto" src="/_assets/images/em_page.svg" alt="EmPage"/>
</div>

## Model
The **Model** node represents the context of the page that you want to create. If your goal is to create a page that 
represents some entity - the model is the map to a that entity. If your goal is to create a page that represents different
chunks of data - the model is the bundle that contains all these chunks. Model is the encapsulation realization and
can be considered as a first step for definition of an EmPage.

::: info IMPORTANT
In order to unify each model - each model has identifier. In case when the identifier is useless for the current context
it can be assigned to an empty or default value.
:::

## Schema
The **Schema** node is the structure of the EmPage. It defines what pieces of the model will define the different views of the
page and at the same time it defines how the system will present that pieces into the front-end. The schema is the 
most important part of each EmPage because it exposes a predefined SDK for configuration and customization 
from the minor to the major element of the page. Each schema is structured to provide three main views in order to expand
the possibilities of the page:
- Index View - represents view that can be used for visualizing page that contains models collection or main context
- Details View - represents view that is used for visualization of details of specified model
- Form View - represents views that are used for create or edit a new or specified model.

## Data

The **Data** node represents the actual data sets that will be visualized into the page. The main difference with the model and schema
is the data itself already exists and maybe is used somewhere else in the application while the other nodes are not able to
exists outside the EmPage. The framework is designed to provide flexible and easy to use approach for fetching data. 
In order to allow developers the possibility to take data from any data source (database, file storage, external service, 
third-party provider, etc.) the implementation of data is always followed by **Data Strategy**. The data strategy is the 
way how the data is fetched so the EmPages can be considered as a limitless from a data perspective.