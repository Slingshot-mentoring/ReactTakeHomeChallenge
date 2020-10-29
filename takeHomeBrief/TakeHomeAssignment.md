# SLINGSHOT: Take Home Assignment (Internal Engineer)

## Task 1

1. Navigate to `localhost:3000/` and `localhost:3000/mentoring`.
2. Read the given codebase and identify places where one can create re-usable react components.
3. Create a comprehensive list called `components.md` in the root level directory of this project and list all of such components.

## Task 2

1. Refactor the codebase to use re-usable react components across `localhost:3000/` and `localhost:3000/mentoring`
2. In your `components.md` please link the folder corresponding to each component.

## Time limit

You are given 3 days to do this task.

## Expectations

1. Ability to think in a `reactive` manner and create re-usable components (functional components for simple components, class components for complicated components. Hint: You should mostly need functional components for this task)
2. Ability to write modular and re-usable code -- this applies to the SCSS and Javascript files.
3. Follow consistent naming, styling conventions.
4. Code is clear, concise and readable.
5. Code is documented and commented through for understand.

## Getting Started

1. Please fork this repo to create your own.
2. Create a branch named `yourname-take-home-submission` and make your changes there.
3. Create a Pull Request from this branch into the original repo's master branch.
4. Please notify your interviewer once you've done so with a link to your Pull Request.

## Example of a re-usable react functional component.

If you navigate to [slingshotmentoring.com](slingshotmentoring.com) you can find a section looking something like this
![Sample React component](./sampleComponent.png)

An example of creating a re-usable react component is as follows:

Functional Component organization

```
// Section.tsx
...
return (
    <div className='section-container'>
        {props.children}
        <img src={props.imgSrc}>
    </div>
)

// SectionTitle.tsx
...
return (
    <div className='section-title'>
        {props.children}
    </div>
)

// SectionPara
return (
    <div className='section-para'>
        {props.children}
    </div>
)
```

Scss files

```
// Section.scss
@import 'App.scss' // import app common styles
@import 'section-title.scss'
@import 'section-para.scss'

.section-container {
    .section-title {
        @extend 'section-title'
        ...
    }

    .section-para {
        @extend 'section-para'
        ...
    }
}

// SectionTitle.scss
@import 'App.scss'

.section-title {
    ...
}

// SectionPara.scss
@import 'App.scss'

.section-para {
    ...
}
```

Usage of these components:

```
<Section imgSrc={'../src/to/image'}, flip={true}>
  <SectionTitle>
	Title
  </SectionTitle>

  <SectionParagraph>
        Para
  </SectionParagraph>
</Section>
```
