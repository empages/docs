---
sidebar: true
sidebarDepth: 3
title: Mapping | Code Samples
---
# Mapping

Emeraude is designed on top of the best libraries and frameworks of .NET ecosystem. For the mapping we are using AutoMapper.
That is powerful and useful library that provides mapping between to objects with very simple configuration.
In Emeraude Framework there are few ways that AutoMapper can be used:

### Standard Profile

The main way that can be used for each application is by creating a mapping profile:

```csharp
public class StandardMappingProfile : Profile
{
    public StandardMappingProfile()
    {
        this.CreateMap<Exercise, ExerciseResultItem>()
            .ForMember(d => d.Id, opt => opt.MapFrom(s => s.Id))
            .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Name));
    }
}
```

Each profile has to be registered in the application startup:

```csharp
setup.ApplicationsOptions.AddMappingProfile<StandardMappingProfile>();
```

### Mapping contract

The smart way of using AutoMapper is by using a mapping contract that is defined by simple interface called
``IMapFrom<TTargetModel>``.
A sample mapping implementation is:

```csharp
public class UserReviewModel : IMapFrom<UserReview>
{
    public Guid Id { get; set; }

    public string Text { get; set; }

    public VoteScale Value { get; set; }
}
```

Please consider that the proper registration requires a mapping profile like this one:

```csharp
public class ApplicationAssemblyMappingProfile : AssemblyMappingProfile
{
    public ApplicationAssemblyMappingProfile()
        : base(Assembly.GetExecutingAssembly())
    {
    }
}
```

Where the base constructor takes the assembly that contains the models that are mapped.
Finally, we have to register that (same as the standard mapping profile):

```csharp
setup.ApplicationsOptions.AddMappingProfile<ApplicationAssemblyMappingProfile>();
```