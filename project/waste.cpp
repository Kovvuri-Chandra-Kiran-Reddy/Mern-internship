// 10
// 1 2 3 4 5 6 7 8 9 10
// 4
// 1 2 5 6 7
// 3 4 8 9
// 2 9 10
// 1 3 4 8 9 10

// 4
// 1 2 3 4
// 4
// 1 2
// 2 3 4
// 1 4
// 1 2 3 4

// 6
// 1 2 3 4 5 6
// 3
// 3 1 2 5
// 3 4
// 5 6

#include <bits/stdc++.h>
using namespace std;

void solve(vector<int> &ok, vector<vector<int>> one, vector<vector<int>> &ok1, int i, int &n, int &ans)
{
    if (i == n)
    {
        set<int> temp1;
        for (auto i : one)
        {
            for (auto j : i)
            {
                temp1.insert(j);
            }
        }
        vector<int> temp(temp1.begin(), temp1.end());
        if (temp == ok)
        {
            if (ans > one.size())
            {
                ans = one.size();
            }
        }
        return;
    }

    // tek
    one.push_back(ok1[i]);
    solve(ok, one, ok1, i + 1, n, ans);
    // yeet
    one.pop_back();
    solve(ok, one, ok1, i + 1, n, ans);
}

int main()
{
    int n;
    cin >> n;
    vector<int> villages;
    for (auto i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        villages.push_back(x);
    }
    int m;
    cin >> m;
    vector<vector<int>> sets;
    for (int i = 0; i < m + 1; i++)
    {
        string vector_input;
        getline(cin, vector_input);

        vector<int> vector;
        stringstream ss(vector_input);
        int element;

        while (ss >> element)
        {
            vector.push_back(element);
        }

        sets.push_back(vector);
    }
    sets.erase(sets.begin());
    int ans = INT_MAX;
    vector<vector<int>> one;
    solve(villages, one, sets, 0, m, ans);
    cout << ans << endl;

    return 0;
}
