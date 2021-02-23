export default {
    name: 'article',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'headline',
            title: 'Headline',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Article Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'person' }
        }
    ]
}