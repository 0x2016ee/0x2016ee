$(document).ready(function(){
var newerLink = $(&quot;a.blog-pager-newer-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-newer-link&quot;).load(newerLink+&quot; .post-title:first&quot;, function() {
var newerLinkTitle = $(&quot;a.blog-pager-newer-link&quot;).text();
$(&quot;a.blog-pager-newer-link&quot;).text(&quot;&lt;&lt;&lt;(New Post)&quot; + newerLinkTitle);
});
var olderLink = $(&quot;a.blog-pager-older-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-older-link&quot;).load(olderLink+&quot; .post-title:first&quot;, function() {
var olderLinkTitle = $(&quot;a.blog-pager-older-link&quot;).text();
$(&quot;a.blog-pager-older-link&quot;).text(olderLinkTitle + &quot;(Old Post)&gt;&gt;&gt;&quot;);//rgt
});
});
