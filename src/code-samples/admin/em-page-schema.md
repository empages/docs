---
sidebar: true
sidebarDepth: 3
title: EmPage Schema | Code Samples
---
# EmPage Schema

Let's consider the following requirement:
We need an EmPage that will provide management for our frequently asked questions with the following needs:
- to be served on route '/admin/faq'
- to serve an index view, represented as table with columns: Order and Question
- to serve an ordering functionality on the table view by using the Order and Questions columns
- to serve a details view with following data: ID, Order, Question, Answer (we consider that field contains encoded HTML content)
- to serve a form for create and edit including the fields Question and Answer with proper validation
- to include the default breadcrumbs and actions to the views

```csharp
public class FrequentlyAskedQuestionEmPageSchema : IEmPageSchema<FrequentlyAskedQuestionEmPageModel>
{
    public async Task<EmPageSchemaSettings<FrequentlyAskedQuestionEmPageModel>> SetupAsync()
    {
        var settings = new EmPageSchemaSettings<FrequentlyAskedQuestionEmPageModel>
        {
            Route = "faq",
            Title = "FAQ",
            Description = @"Complete management features for frequently asked questions used in the FAQ 
            the section on the client-side of the application",
        };

        settings
            .ConfigureIndexView(indexView =>
            {
                indexView
                    .Use(x => x.Order, item =>
                    {
                        item.SetComponent<EmPageTextRenderer>();
                    })
                    .Use(x => x.Question, item =>
                    {
                        item.SetComponent<EmPageTextRenderer>();
                    });

                indexView.OrderProperties["Order"] = "Order";
                indexView.OrderProperties["Question"] = "Question";
            })
            .ConfigureDetailsView(detailsView =>
            {
                detailsView
                    .Use(x => x.Id, item =>
                    {
                        item.SetComponent<EmPageTextRenderer>();
                    })
                    .Use(x => x.Order, item =>
                    {
                        item.SetComponent<EmPageTextRenderer>();
                    })
                    .Use(x => x.Question, item =>
                    {
                        item.SetComponent<EmPageTextRenderer>();
                    })
                    .Use(x => x.Answer, item =>
                    {
                        item.SetComponent<EmPageHtmlRenderer>(component =>
                        {
                            component.Encoded = true;
                        });
                    });
            })
            .ConfigureFormView(formView =>
            {
                formView
                    .Use(x => x.Question, item =>
                    {
                        item.SetComponent<EmPageTextMutator>();
                        item.Required = true;
                    })
                    .Use(x => x.Answer, item =>
                    {
                        item.SetComponent<EmPageHtmlMutator>();
                        item.Required = true;
                    });

                formView
                    .ConfigureModelValidator((type, rules) =>
                    {
                        rules
                            .RuleFor(x => x.Question)
                            .NotEmpty()
                            .WithMessage("Question is a required field")
                            .Must(x => x.EndsWith("?"))
                            .WithMessage("Question must ends with question mark");
    
                        rules
                            .RuleFor(x => x.Answer)
                            .NotEmpty()
                            .WithMessage("Answer is a required field");
                    });
            })
            .ApplyDefaultEmPageBreadcrumbs()
            .ApplyDefaultEmPageActions();

        return settings;
    }
}
```

Please consider the provided schema is for the following EmPageModel:

```csharp
public class FrequentlyAskedQuestionEmPageModel : IEmPageModel, IMapFrom<FrequentlyAskedQuestion>
{
    public string Id { get; set; }

    public int Order { get; set; }

    public string Question { get; set; }

    public string Answer { get; set; }
}
```
