---
layout: page
title: Tutorial
permalink: /about/tutorial/
---
Table of Contents:

 * Introduction
 * Options
 * Content

# Introduction
This website is designed to be as editable as possible. Using the power of YAML options and Markdown, it is easy to edit, and very flexible.

# Getting Started
Each new page is defined by a "Markdown" file. Markdown files have two main sections, Options and Content. Options are used to set values about the page, while the Content is the actual text and images for the page.

<br>

---
<br>

# Options
These options begin the file. They are surrounded by three hyphens on either side, as shown.

## Values:
    ---
    layout: page
    ---

These options are formatted very simply.

    ---
    name: value
    ---

## Lists:

There are also two types of lists.

One is a list of values, which looks like this:

    ---
    name:
      -value
      -value2
      -value3
    ---

The other type is a list of pairs

    ---
    name:
      - name1: value1
        name2: value2

      - name1: value3
        name2: value4
    ---

With these simple `name: value` pairs, you can define a lot of properties about the page.
Notes:

 * "\*" = Anything
 * "\|" = OR

| Name          | Values          | Description                                          |  Example   |
|:-------------:|:---------------:|:-----------------------------------------------------|------------|
| layout        | page \| picture | The layout of the pages (Required)                   |  `layout: page`
| title         | *               | Title of the page (Required)                         |  `title: Tutorial`
| permalink     | /*/             | URL for the page to be at. Starts and Ends with "/"  |  `permalink: /help/tutorial/`
| render        | true            | If present, the page will be linked on the site nav  |  `render: true`
| links         | List of Titles  | List of titles for the page nav bar                  |  `links: - Tutorial`
| slideshow     | List of Pictures| Adds Pictures to the Slideshow                       |  `slideshow: - picture: img.jpg caption: Hi`
| override      | true            | If present, the default slides will not be included  |  `override: true`
{: .border}
<br>

---
<br>

# Content
Content is the actual content of the webpage. This content is written in a special form of Markdown called Kramdown. Kramdown is extremely expansive and flexible, however a lot of it is complicated. I will cover the basics here.

[Kramdown Documentation Guide](http://kramdown.gettalong.org/syntax.html)

## Basic Text:

Markdown is designed to be written as you would write an email. This entire page is actually written with markdown.

    ##Basic Text:

    Markdown is designed to be written as you would write an email. This entire page is actually written with markdown.

See? Its easy.

For basic content, it is written normally, such as this.

    For basic content, it is written normally, such as this.

To get larger text, # is used.

For example:

# This is a title

### This is a small title

    #This is a title

    ###This is a small title

Links are just as easy.

[This is a link to a fluffy kitty](http://i.imgur.com/9JbJeG4.gifv)

    [This is a link to a fluffy kitty](http://i.imgur.com/9JbJeG4.gifv)

If you want to link to a page on the site, just use the ending after the "relcolocomotives.com" with the addition of /, which tells the website to add on the relcolocomotives.com and anything else that may be at the end.

[This is a link to this page.]({{site.baseurl}}/about/tutorial/)

    [This is a link to this page.]({{site.baseurl}}/about/tutorial/)

<br>

However, what if we want to display that as an image?

Let's take a look at another kitty picture.

<img src="http://i.imgur.com/9xLwvaT.jpg" alt="Look at the floofy kitty." style="width: 300px;"/>

    ![Look at the floofy kitty.](http://i.imgur.com/9xLwvaT.jpg)

<br>

---
<br>

# Creating a page

Create a text file in the "pages" directory, with the extension ".md".

This page needs the options at the top, and then the content below.

    ---
    layout: page
    title: Example
    permalink: /about/example/
    ---
    Content Here!

That is an example page, with the title Example and the url set to /about/example/
Now, if we stick it in the pages directory, [we get this.](/about/example/)

And Voila! Page has been added!

Now, what if you want to add an image to your page?

Take your image, and add it to the "images" directory.
You then can add your image the same way you would link to it.

![Its our logo](/images/Logo.jpg)

    ![Its our logo](/images/Logo.jpg)

<br>

---
<br>

# Creating a Slideshow Picture

Adding a picture to the default slideshow is easy as well!

Just add the slideshow picture in the "main" directory under "images/slideshow"
