class Solution(object):
    def maxProfit(self, prices):
        length = len(prices)
        if length<2: return 0
        right,rnet,rmax = [0]*length,0,0
        for i in range(length-2,-1,-1):
            rnet += prices[i+1]-prices[i]
            if rnet<0: rnet=0
            rmax = max(rmax,rnet)
            right[i]=rmax
        lnet,lmax,result=0,0,right[0]
        for i in range(1,len(prices)):
            lnet += prices[i]-prices[i-1]
            if lnet<0: lnet=0
            lmax=max(lmax,lnet)
            if i+1<length: result=max(result,lmax+right[i+1])
        return result