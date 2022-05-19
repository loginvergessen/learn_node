- # History
- up to 2009 javascript was only able to run in browsers
- inventor of node = Ryan Dahl
- uses Chrome v8 javascript engine
- node.js = v8 + (c++ program)
- #+BEGIN_TIP
  node is not programming language nor a framework!
  
  its' a **runtime environment** for executing javascript code
  #+END_TIP
- # async vs sync
- node is async by default
- a thread can handle multiple request
- good for IO intensive  apps
- dont use node for cpu intensive apps
	- video encoding
	- image manipulation
	- ...
-
- [[tools]]
- [[module]]