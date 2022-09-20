# Ouivalo-defi

EDIT: 16.09.2022

cd react-form to see the project !

Had to read hell of React documentation 'cause I knew nothing about it yet.

The form is done, it updates my data which is ready to fly to Ouivalo's API when submit. 
It just need a little bit of eco-friendly themed CSS.
I currently have a lot of troubles with resolving CORS issue, therefore I can't really test my POST request to Ouivalo's API.

My main idea is to set up an nginx in my upcoming Docker container so it can redirect my HTTP request.
So my next step will be to re-read Docker documentation to remember about all the compose stuff.

Moreover, after reading the Issues on Ouivalo's repo, it seems that it may not be a CORS problem but probably an HTTP redirection problem.

EDIT 17.09.2022

Can't figure why I keep receive a preflight request error. 

I tried to custom Axios headers when I use a POST request

I studied how to allow my HTTP request to be redirected server-side but didn't find anything

I made sure I sent a application/json as the body.


I'll work on my Docker container while waiting for help.



RESSOURCES: 

React Basics {

https://www.upbeatcode.com/react/react-naming-conventions/

https://fr.reactjs.org/docs/create-a-new-react-app.html

https://reactjs.org/tutorial/tutorial.html

https://fr.reactjs.org/docs/forms.html

}

POST request {

https://www.freecodecamp.org/news/how-to-use-axios-with-react/

}

CORS / preflight request issue {

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

http://oskarhane.com/avoid-cors-with-nginx-proxy_pass/

}

