export default {
	id: "linovel",
	title: "轻之书库",
	logo: "https://www.linovel.net/apple-touch-icon.png",
	href: "https://www.linovel.net",
	security: "",
	isAdult: false,
	type: "read",
	search: [{
		type: "novel",
		ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
		url: "/search/?kw={{keyword}}&page={{page}}",
		list: "@sel:class.rank-book-list[0]>>tag.a",
		title: "@sel:tag.img[0]>>attr.alt",
		cover: "@sel:tag.img[0]>>attr.src",
		desc: "@sel:class.book-intro[0]>>text",
		detailUrl: "@sel:attr.href@relation:0",
		tag: "@sel:class.book-tag>>text@string:",
		creator: "@sel:class.book-extra[0]>>text@sync:return lastResult.split('丨')[0].trim()",
		style: "轻小说",
		updateTime: "@sel:class.book-extra[0]>>text@split:丨>>1@trim:"
	}],
	find: [{
		type: "novel",
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		url: "书籍分类?:全部::/cat/-1.html?page={{page}}+:文库精选::/cat/2000.html?page={{page}}+:幻想::/cat/1.html?page={{page}}+:战斗::/cat/2.html?page={{page}}+:恋爱::/cat/3.html?page={{page}}+:异界::/cat/4.html?page={{page}}+:搞笑::/cat/5.html?page={{page}}+:日常::/cat/6.html?page={{page}}+:校园::/cat/7.html?page={{page}}+:后宫::/cat/8.html?page={{page}}+:科幻::/cat/10.html?page={{page}}+:治愈::/cat/11.html?page={{page}}+:超能力::/cat/12.html?page={{page}}+:节操::/cat/13.html?page={{page}}+:妖怪::/cat/14.html?page={{page}}+:恐怖::/cat/15.html?page={{page}}+:妹控::/cat/16.html?page={{page}}+:伪娘::/cat/17.html?page={{page}}+:魔法少女::/cat/18.html?page={{page}}+:乙女::/cat/19.html?page={{page}}+:同人::/cat/20.html?page={{page}}+:百合::/cat/21.html?page={{page}}+:偶像::/cat/22.html?page={{page}}+:悬疑::/cat/104.html?page={{page}}$:签约?:商业签约::/cat/-1.html?sign=2&page={{page}}+:文库签约::/cat/-1.html?sign=3&page={{page}}+:授权签约::/cat/-1.html?sign=4&page={{page}}+:官方签约::/cat/-1.html?sign=8&page={{page}}+:正版签约::/cat/-1.html?sign=9&page={{page}}+:未签约::/cat/-1.html?sign=0&page={{page}}$:排序?:综合排序::/cat/-1.html?sort=hot&page={{page}}+:最多援力::/cat/-1.html?sort=supp&page={{page}}+:最多收藏::/cat/-1.html?sort=fav&page={{page}}+:最多字数::/cat/-1.html?sort=words&page={{page}}+:最近更新::/cat/-1.html?sort=updates&page={{page}}",
		list: "@sel:class.rank-book-list[0]>>class.rank-book",
		title: "@sel:class.book-name>>text",
		cover: "@sel:class.book-cover>>tag.img>>attr.src",
		desc: "@sel:class.book-intro[0]>>text",
		detailUrl: "@sel:class.book-name>>attr.href@relation:0",
		tag: "@sel:class.book-tag@map:item.innerHTML.trim()@toString:",
		creator: "@sel:class.book-extra[0]>>text@sync:return lastResult.split('丨')[0].trim()",
		style: "轻小说",
		updateTime: "@sel:class.book-extra[0]>>text@split:丨>>1@trim:"
	},{
		type: "novel",
		url: "排行榜?:重推周榜::/hub/getTopBooks?unit=zt&time=week&page={{page}}+:重推月榜::/hub/getTopBooks?unit=zt&time=month&page={{page}}+:佳作周榜::/hub/getTopBooks?unit=jz&time=week&page={{page}}+:佳作月榜::/hub/getTopBooks?unit=jz&time=month&page={{page}}+:月票周榜::/hub/getTopBooks?unit=ticket&time=week&page={{page}}+:月票月榜::/hub/getTopBooks?unit=ticket&time=month&page={{page}}+:应援周榜::/hub/getTopBooks?unit=supp&time=week&page={{page}}+:应援月榜::/hub/getTopBooks?unit=supp&time=month&page={{page}}",
		list: "@json:data.books",
		title: "@json:name",
		cover: "@json:coverUrl",
		desc: "@json:about",
		detailUrl: "/book/<js>@json:id</js>.html@relation:0",
		tag: "@sync:return Object.keys(lastResult.cat).map(key => Object.keys(lastResult.cat)[key])@toString:",
		creator: "@json:author",
		style: "轻小说",
		latest: "@json:lastVolName",
		updateTime: "@json:up"
	}],
	detail: [{
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		title: "@sel:class.book-title>>attr.title",
		cover: "@sel:class.book-cover>>tag.img>>attr.src",
		creator: "@sel:class.novelist>>tag.a>>text",
		desc: "@sel:class.about-text>>text",
		style: "@sel:class.book-cats>>tag.a>>text@replace:#>>",
		updateTime: "@sel:class.book-last-update>>text",
		tag: "@sel:class.book-cats>>tag.a@map:item.innerHTML.trim().replace('#', '')@toString:@trim:",
		isEnd: "@sel:class.book-data>>tag.span[6]>>text@sync:return lastResult.indexOf('已完结') > -1",
		catalogUrl: "@sync:return requestUrl@relation:0",
		recomeUrl: "@sync:return requestUrl@relation:0",
		characterUrl: "@sync:return requestUrl@relation:0",
		commentUrl: "/comment/items?type=book&tid=<js>@sync:return requestUrl.replace(baseUrl +'/book/', '').replace('.html', '')</js>&pageSize=10&page={{page}}&_=1691049728778@relation:0"
	},{
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		title: "@sel:class.user>>class.name>>tag.p>>text",
		avatar: "@sel:class.profile-cover>>tag.img>>attr.src",
		cover: "https://eli.linovel.net/static/img/profile_cover.22b302b.jpg",
		desc: "@sel:class.profile>>tag.li>>text",
		catalogUrl: "小说::<js>@sync:return requestUrl</js>@type:novel@relation:1",
		characterUrl: "粉丝::<js>@sync:return requestUrl@replace:info>>followerList</js>&page={{page}}@relation:1+:关注::<js>@sync:return requestUrl@replace:info>>followeeList</js>&page={{page}}@relation:1"
	}],
	catalog: [{
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		list: "@sel:class.chapter",
		title: "@sel:tag.a>>text",
		contextUrl: "@sel:tag.a>>attr.href@relation:0",
		isVip: "@sel:attr.class@sync:return lastResult.split(' ').indexOf('lock') > -1"
	},{
		ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
		list: "@sel:class.works-grid>>class.grid",
		title: "@sel:class.title>>text",
		cover: "@sel:tag.img>>attr.src",
		creator: "@sync:return resource.title",
		detailUrl: "@sel:tag.a>>attr.href@relation:0",
		style: "轻小说"
	}],
	character: [{
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		list: "@sel:class.novelist",
		title: "@sel:class.name>>tag.a>>text",
		avatar: "@sel:tag.img>>attr.src",
		cover: "https://eli.linovel.net/static/img/profile_cover.22b302b.jpg",
		desc: "@sel:class.about>>text",
		detailUrl: "@sel:class.name>>tag.a>>attr.href@relation:1"
	},{
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		list: "@sel:class.user-list>>tag.li",
		title: "@sel:class.name>>text",
		avatar: "@sel:tag.img>>attr.data-original",
		cover: "https://eli.linovel.net/static/img/profile_cover.22b302b.jpg",
		desc: "@sel:class.sign>>text",
		detailUrl: "@sel:tag.a>>attr.href@relation:1"
	}],
	recome: [{
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		list: "@sel:class.side-show-image-item",
		title: "@sel:tag.img[0]>>attr.alt",
		cover: "@sel:tag.img[0]>>attr.src",
		detailUrl: '@sel:attr.href'
	}],
	comment: [{
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		list: "@json:items",
		avatar: "@json:author.avatar",
		title: "@json:author.nick",
		subtitle: "@json:date@sync:return DateFormat(lastResult*1000)",
		content: "@json:content",
		subComments: "@json:replies.items@map: { return { avatar: item.author.avatar, title: item.author.nick, title: item.author.nick, subtitle: DateFormat(item.date*1000), content: item.content } }"
	}],
	context: [{
		ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
		title: "@sel:class.article-title>>text",
		custom: "@sel:class.article-text>>tag.img@map:'<img style=&quot;max-width:100%&quot; src=&quot;' + item.attributes.src + '&quot;>'",
		content: `@sel:class.article-text>>tag.p@filter:item.attributes.class.indexOf('l-image') == -1@map:item.innerHTML.trim()@join:&wrap;&wrap;`
	}]
}
