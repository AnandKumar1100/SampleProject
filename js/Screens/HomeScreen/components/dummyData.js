const politics = require('../../../assets/images/Politics.png')
const entertainment = require('../../../assets/images/Entertainment.png')
const auto = require('../../../assets/images/Auto.png')
const hatke = require('../../../assets/images/Hatke.png')
const hike = require('../../../assets/images/hike.png')
const indiaGate = require('../../../assets/images/IndiaGate.png')
const international = require('../../../assets/images/Travel.png')
const science = require('../../../assets/images/Science.png')

export const Categories = [
    { iconName: 'feed', title: 'MY FEED', id: 1 },
    { iconName: 'newspaper-o', title: 'ALL NEWS', id: 2 },
    { iconName: 'star', title: 'TOP STORIES', id: 3 },
    { iconName: 'fire', title: 'TRENDING', id: 4 },
    { iconName: 'bookmark', title: 'BOOKMARKS', id: 5 },
    { iconName: 'eye-slash', title: 'UNREAD', id: 6 }
];

export const Topics = [
    { id: 1, imageName: indiaGate, title: 'CAA' },
    { id: 2, imageName: international, title: 'Coronavirus' },
    { id: 3, imageName: indiaGate, title: 'India' },
    { id: 4, imageName: hatke, title: 'Business' },
    { id: 5, imageName: politics, title: 'Politics' },
    { id: 6, imageName: entertainment, title: 'Sports' },
    { id: 7, imageName: science, title: 'Technology' },
    { id: 8, imageName: hike, title: 'Startups' },
    { id: 9, imageName: entertainment, title: 'Travel' },
    { id: 10, imageName: hatke, title: 'Hatke' },
    { id: 11, imageName: international, title: 'International' },
    { id: 12, imageName: auto, title: 'Automobile' },
    { id: 13, imageName: science, title: 'Science' }
];