# Building Entities

The purpose of client builder is to use application data, source code and custom data to generate 
ready to use code for application purposes. Each data item which can provide a useful information 
for automatization is called **Building Entity**. 

The accessibility of available data could be reached with many different ways and it mainly depends on
skills and strengths of the developers. We could provide you a few ways to extract data for the purposes 
of **Emeraude Client Builder**.

## Databases
The most clear data providers of any systems are the databases. Currently in the **Emeraude Framework** 
there are 3 databases (entity, locales and logging). For instance the default builder modules use locales 
database to generate the translations resources.

## Assembly Scanning
This is the most useful way to extract data for generation and eventually the most applicable 
for the most of the cases. The assembly scanning of classes/methods can be applied by many ways but the most useful in
our opinion are:
- **Attributes** - We decorate a class/property/method with specific annotation.
- **Interfaces / Abstract classes** - The target classes inherit a predefined interface or an abstract class.
- **Naming convention** - A class has specific name (DogPage, CatPage, MousePage).
- **Directory based** - We place the target classes into specified directory.

## Custom Data
This is the most direct way to get data for the generation. In this way we use custom file/s 
written manually or generated from a third party software. Most of the cases we could use a *.json*, 
*.xml*, *.yml*, *.csv* or any other file type which is proper for configuration storage.