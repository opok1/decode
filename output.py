#2024-08-03 08:05:20
import requests
from datetime import datetime
import time
import os
code="夕拾"
ver="1.0"
envname="yuanshen_xishi"
split_chars=['@','&','\n']
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   print(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.start()
   print(f"--------第{i}个账号执行完毕--------")
 if not os.getenv(envname):
  print(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text,"\n\n\n")
 except:
  print("网络异常,链接公告服务器失败(gitee)，请检查网络")
  exit()
 cookies=split_cookies(cookie,split_chars)
 account_count=len(cookies)
 print(f"一共获取到{account_count}个账号")
 print(f"=========🔔开始执行[{code}][{ver}]=========\n")
 start_time=time.time()
 try:
  scmain(cookies,*args,**kwargs)
 except Exception as e:
  print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: {execution_time:.2f} 秒")
class yuanshen:
 def __init__(self,cookie):
  self.cookie=cookie
  self.headers={"os":"android","Version-Code":"2","Client-Version":"1.0.1","datetime":"2024-05-31 20:43:44.906","Accept":"application/json","Authorization":self.cookie,"Content-Length":"0","Host":"www.xishidaxue.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.12.13"}
 def start(self):
  now=datetime.now()
  time_n=now.strftime("%Y-%m-%d %H:%M:%S.%f")[:-3]
  self.headers["datetime"]=time_n
  print(f"[{time_n}]开始执行")
  url="http://www.xishidaxue.com/api/v2/mining/start"
  r=requests.post(url,headers=self.headers).json()
  print(f"开启结果[{r}]")
if __name__=='__main__':
 env()
