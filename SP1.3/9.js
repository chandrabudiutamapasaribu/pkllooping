var n=9 
for (var i=1;i<=n;i++){
        for (var j=1;j<=n;j++){
        	if (i==j || i + j == n +1) {
            document.write("+    " +'   '  );
     }else{
     	document.write(' - ')
     }}
     document.write('<br/>')
 	}