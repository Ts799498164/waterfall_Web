# waterfall_Web  
## 瀑布流实现  
### 该页面可以把图片按一定规则动态加载到浏览器上，在滚动过程中会无限加载预定的图片，并把这些图片也按照规则添加到浏览器中。如下图所示：
![Image text](https://github.com/Ts799498164/image-folder/blob/master/waterfall.png)   
### 发现的问题：   
### 当初始页面图片很少（少到没有滚动条）的时候无法通过滚动事件动态加载预定的图片，就失去了动态加载的功能，如下图所示：
![Image text](https://github.com/Ts799498164/image-folder/blob/master/waterfall_bug1.png)
### 通过添加判断，实现了在无滑动栏时也自动添加图片，虽然添加了图片使滑动栏出现了，但是却出现了新的问题，就像下图展示的那样，动态添加的图片出现了重叠放置，但是一滑动又会按原先的规则重新放好。
![Image text](https://github.com/Ts799498164/image-folder/blob/master/waterfall_bug.png)
## To be continued.
