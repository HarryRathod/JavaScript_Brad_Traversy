#include <bits/stdc++.h>
using namespace std;

class trie
{
    bool isTerminal;
    trie *children[26];

    public:
    trie()
    {
        isTerminal=false;
        for(int i=0;i<26;i++)
            children[i]=NULL;
    }

    void add(string word)
    {
        trie *temp=root;
        int n=word.size();
        for(int i=0;i<n;i++)
        {
            
        }
    }
}*root=NULL;

int main()
{
    vector<int> prices={60,100,120};
    vector<int> wt={10,20,30};
    int W=50;


    return 0;
}