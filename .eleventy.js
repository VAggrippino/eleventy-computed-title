module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'base.njk')

    // Add collections that allow groupings by year/month and year
    eleventyConfig.addCollection('contentByMonth', require('./_utils/collections/contentByDate').contentByMonth)
    eleventyConfig.addCollection('contentByYear', require('./_utils/collections/contentByDate').contentByYear)
}