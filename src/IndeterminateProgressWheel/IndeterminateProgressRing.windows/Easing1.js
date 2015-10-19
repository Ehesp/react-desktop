customEasing = {};
customEasing.pts = [{Mx:0,My:0,Nx:66.6,Ny:-66.6,Px:0.0500000000000114,Py:-0.0500000000000114},{Mx:66.65,My:-66.65,Nx:66.7,Ny:-66.7,Px:29.65,Py:23.35},{Mx:163,My:-110,Nx:7.30000000000001,Ny:-113.3,Px:29.7,Py:23.3},{Mx:200, My:-200}];
customEasing.ease = function(t,b,c,d,pl){
  var i,r;
  r = 200 * t/d;
  for(i = 0;r>pl[i+1].Mx;i++){
  }
  i=pl[i];
  if(i.Px != 0){
    r=(-i.Nx+Math.sqrt(i.Nx*i.Nx-4*i.Px*(i.Mx-r)))/(2*i.Px);
  }else{
    r=-(i.Mx-r)/i.Nx;
  }
  return b-c*((i.My+i.Ny*r+i.Py*r*r)/200);
}

export const myCustomEasing = customEasing.ease;
