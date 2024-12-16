#include <bits/stdc++.h>
using namespace std;

bool prime(int n)
{
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++)
    {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
   cout << "give n" << endl;
   int n;
   cin >> n;
   vector<int> v(n);
   int m = INT_MIN, mi = INT_MAX;
   for (int i = 0; i < n; i++)
   {
       cin >> v[i];
       if (prime(v[i]) && v[i] > m)
       {
           m = v[i];
       }
       if (prime(v[i]) && v[i] < mi)
       {
           mi = v[i];
       }
   }
   vector<int> ans;
   for (int i = 0; i < n; i++)
   {
       if (v[i] != m && v[i] != mi)
       {
           ans.push_back(v[i]);
       }
   }
   sort(ans.rbegin(), ans.rend());
   vector<int> a;
   a.push_back(m);
   for (int i = 0; i < ans.size(); i++)
   {
       a.push_back(ans[i]);
   }
   a.push_back(mi);
   for (auto x : a)
   {
       cout << x << " ";
   }
   cout << endl;
}
