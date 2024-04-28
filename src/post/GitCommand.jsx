import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap';

const GitCommand = () => {
  const markdownContent = `
  # Git 常用指令

  

  ---
  #### Git 主要分為本地倉庫跟遠端倉庫
  

  
  本地的檔案 ｜ 暫存區 ｜本地倉庫 ｜遠端倉庫
  
  > 本地的檔案就是目前IDE編輯的檔案
  > 
  
  > 遠端倉庫就是github 機房的電腦裡會有一個檔案記錄你的專案
  > 
  
  示意圖如下：
  
  ![Git concept](https://i.imgur.com/5jcNa7f.png)
  
  ### 常用的指令
  
  ---
  
  \`git init\` - 初始化
  
  \`git add\` - 追蹤檔案變化
  
  \`git commit -m “message”\`  - 提交此次變更並附上評論
  
  \`git push origin main\`  - 把檔案變化提交到遠端倉庫 main 分支
  
  \`git remote\`  - 查看遠端倉庫 (後面加上 -v 可以查看詳細)
  
  \`git fetch origin\`  - 查看遠端倉庫有沒有新進度  , 指令會拉取遠端所有新 commit 但是不會進行merge 操作
  
  ### 撤銷與回朔
  
  ---
  
  \`git log\`  - 可以查看提交歷史
  
  > 以下操作不可逆 可能導致修改丟失 要注意使用！
  > 
  
  \`git reset\`  - 重新回朔進度 
  
  \`git reset -- hard main\` - 將目前分支的進度回朔到 main branch 的最新進度 
  
  \`git reset -- hard <commit hash>\` - 透過 commit 的hash 編號回朔到指定 commit 的進度
  
  \`git reset --hard HEAD\`  - 回朔到最新的一次 commit (HEAD就是指最新的commit)
  
  \`git reset --hard HEAD~2\` - 回朔到 HEAD 之前兩個的 commit
  
  \`git checkout HEAD\` - **工作目錄**回朔到HEAD狀態 暫存區不變
  
  \`git checkout -- A.txt\` - 針對單一檔案 工作目錄的 A.text 檔案回朔到 HEAD 狀態(default)
  
  \`git checkout <commit hash>\` - 透過 commit hash **讓工作目錄跟暫存區都回朔到指定 commit** , HEAD 也會指向這個 commit 
  
  ### 分支操作
  
  ---
  
  \`git branch\`  - 查看目前的分支
  
  \`git branch new\` - 創建一個叫做 new 的 branch
  
  \`git checkout <branch name>\`  - 切換分支
  
  \`git merge main\`  把指定分支(main)合併過來目前的分支
  
  \`git push --set-upstream origin <branch name>\` - 在遠端儲存庫上創建一個新的分枝，並將你的本地分枝與遠端分枝關聯起來，使得在以後的推送和拉取中你不再需要額外指定遠端分枝
  
  ### 創建新專案
  
  ---
  
  \`git init\`  - 初始化
  
  \`git add index.html\`  - 將新增的檔案加入暫存區
  
  \`git commit -m "Initial commit"\`  - 進行第一次的 commit 將暫存區提交到 local repo
  
  \`git remote add origin <遠端儲存庫的URL>\` 連接到遠端儲存庫（可選）
  
  \`git push -u origin master\`  - 推送到遠端儲存庫 , -u 代表將 origin 設為預設的指定遠端倉庫
  
  ### 註解
  
  ---
  
  > 回朔的進度依照 commit 的時間點進行判斷
  >
  `;

  return (
    <Container fluid className='d-flex justify-content-center' >
        <div className='col-6 mt-5' >

            <ReactMarkdown children={markdownContent} />   
        </div>
    </Container>
  );
};

export default GitCommand;
