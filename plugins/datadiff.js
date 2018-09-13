import {DateDiff} from '~/plugins/datetimediff' 
export const articleListDiff = (lists)=>{
    lists.forEach(item => {
        item.src = item.articleImageUrl
        item.fallbackSrc = item.articleImageUrl
        item.desc = item.abstract
        item.url = '/d/'+item.id
        item.meta = {
            source:item.author.length>5?item.author.substr(0,5)+'...':item.author,
            date:DateDiff(item.releaseTime),
            other:'阅读数:'+item.readCount
        }

    });
    lists.forEach(item => {
        delete item.articleImageUrl
        delete  item.articleImageUrl
        delete  item.abstract
        delete item.id
    
        delete item.author
        delete item.releaseTime
        delete item.readCount
        delete item.likeCount
        delete item.commentCount
       

    });
    return lists;
}