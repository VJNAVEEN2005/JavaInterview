n = [4,16,14];
d = [1,12,44,48,0];

[z,p,k] = tf2zp(n,d);

printsys(n,d)