---
sidebar: true
sidebarDepth: 3
title: EmPage Data Strategy | Code Samples
---
# EmPage Data Strategy

Let's consider two possible options for implementation of data strategy:

#### Data strategy for work with data from the internal application database

```csharp
public class FrequentlyAskedQuestionEmPageDataStrategy : EmPageEntityDataStrategy<FrequentlyAskedQuestion, FrequentlyAskedQuestionEmPageModel>
{
    public FrequentlyAskedQuestionEmPageDataStrategy()
    {
        this.AddOrderExpression(string.Empty, x => x.Order);
        this.AddOrderExpression("Order", x => x.Order);
        this.AddOrderExpression("Question", x => x.Question);
    }
}
```

In the example: we are implementing directly the provided from the framework **EmPageEntityDataStrategy** and include some
configuration there related to the ordering expressions that will be available for a key.

#### Data strategy for work with external data of any type
```csharp
public class FrequentlyAskedQuestionEmPageDataStrategy : IEmPageDataStrategy<FrequentlyAskedQuestionEmPageModel>
{
    public IEmPageRequest<FrequentlyAskedQuestionEmPageModel> BuildRawModelQuery(EmPageDataFilter filter)
    {
        // return CQRS raw model query by using the EmPageDataFilter as a identification criteria for the model
    }

    public IEmPageRequest<FrequentlyAskedQuestionEmPageModel> BuildRawModelQuery(string modelId)
    {
        // return CQRS raw model query by using the model ID as a identification criteria for the model
    }

    public IEmPageRequest<FrequentlyAskedQuestionEmPageModel> BuildFetchQuery(EmPageDataFetchQueryBody body)
    {
        // return CQRS collection query
    }

    public IEmPageRequest<FrequentlyAskedQuestionEmPageModel> BuildDetailsQuery(string modelId)
    {
        // return CQRS details query
    }

    public IEmPageRequest<FrequentlyAskedQuestionEmPageModel> BuildCreateCommand(FrequentlyAskedQuestionEmPageModel model)
    {
        // return CQRS create command
    }

    public IEmPageRequest<FrequentlyAskedQuestionEmPageModel> BuildEditCommand(string modelId, FrequentlyAskedQuestionEmPageModel model)
    {
        // return CQRS edit command
    }

    public IEmPageRequest<FrequentlyAskedQuestionEmPageModel> BuildDeleteCommand(string modelId)
    {
        // return CQRS delete command
    }
}
```
