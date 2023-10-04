### Splitting Apps into Components

Got the SRC from the download template!

### Property & Event Binding Overview

Can use property and event binding on HTML elements, directives (ng class and style), and we can use it on our own components and make our own events (in this next section) 

### Binding to Custom Properties

Key value pairs
Not type definitions (on right side of equal sign)

{key:value}

Why can't we access element from ts to js? By default all properties of components are only accessable inside these com not from outside. You don't want to make all your properties bindable from outside. Need to be explicit to which you make public. Parent to be able to bind to this property, need to add a decorator.

Add decorator to property ts file!


From this

![Alt text](image-1.png)

to this

![Alt text](image.png)

### Assigning an Alias to Custom Properties

If you implement THIS component, you now have to target the srvElement if you want to bind to this property. Element will not work it must be the alias. 

![Alt text](image-2.png)


![Alt text](image-3.png)

If you want to assign an alias to a component outside the property name, this is how.


### Binding to Custom Events

***

### Understanding View Encapsulation

Angular enforces this style encapsulation, by giving the same attribute to all attributes in a component. Does this for each component with unique attribute names. Can make sure once it's changed your style selector that these styles are only complied to elements of that component. 

Emulates the "shadow DOM". Each element has it's own shadow DOM applied to it, can connect it's own style to each element.

So... it's like a mom with triplets who decides to give each kid a the same color onsie.

### More on View Encapsulation

![Breaking the Encapsulation of Angular](image-4.png)

So EVERY one of the elements, except this one, will follow the automatic stylings of Angular. This one that was excluded will be applied globally... but for certain content that was overrided.

For example, the headers here

![HEaders](image-5.png)

![sTyling](image-6.png)

![Alt text](image-7.png)


### Using Local References in Templates

