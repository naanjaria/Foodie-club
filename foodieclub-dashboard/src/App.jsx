import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sentimentData = [
  { name: 'Before', skeptical: 72, neutral: 20, positive: 8 },
  { name: 'Week 1', skeptical: 58, neutral: 27, positive: 15 },
];

const FoodieClubDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8 text-slate-900">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-xl font-semibold mb-1">FoodieClub Reddit Campaign</h1>
        <p className="text-sm text-slate-500 mb-6">Week 1</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white border rounded-lg p-4">
            <p className="text-xs text-slate-500">Impressions</p>
            <p className="text-lg font-semibold">28.4K</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-xs text-slate-500">Comments</p>
            <p className="text-lg font-semibold">43</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-xs text-slate-500">Upvote ratio</p>
            <p className="text-lg font-semibold">79%</p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <p className="text-xs text-slate-500">Search movement</p>
            <p className="text-lg font-semibold">+2</p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 mb-6">
          <p className="text-sm mb-3">Sentiment</p>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="skeptical" fill="#fda4af" />
                <Bar dataKey="neutral" fill="#94a3b8" />
                <Bar dataKey="positive" fill="#6ee7b7" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

       <div className="bg-white border rounded-lg p-4 mb-6">
  <p className="text-sm mb-2">Posts</p>
  <ul className="text-sm text-slate-600 space-y-2">
    <li>
      r/LosAngeles — Tried FoodieClub last week (live)  
      <span className="block text-xs text-slate-400">testing “is it legit?” angle</span>
    </li>

    <li>
      r/frugal — I tried FoodieClub for a week, here’s what I saved  
      <span className="block text-xs text-slate-400">real usage / proof</span>
    </li>

    <li>
      r/AskSF — What’s the catch with FoodieClub?  
      <span className="block text-xs text-slate-400">directly addressing skepticism</span>
    </li>

    <li>
      r/personalfinance — Used it at 9pm, got ~40% off  
      <span className="block text-xs text-slate-400">soft conversion</span>
    </li>
  </ul>
</div>
   <div className="bg-white border rounded-lg p-5">
  <h2 className="text-sm font-semibold mb-2">SE Analysis</h2>
  <p className="text-sm text-slate-600 leading-6">
    First post did what it needed to do. People are engaging and the reaction isn’t as negative as before,
    which is the main thing at this stage.
    <br /><br />
    Not a huge shift yet, but direction looks right. The more important signal is that some comments are
    moving from “this sounds fake” to “how does this actually work?”
    <br /><br />
    Next couple of posts matter more. If sentiment keeps improving and we start seeing more real curiosity,
    then this should translate into actual usage.
  </p>
</div>
      </div>
    </div>
  );
};

export default FoodieClubDashboard;